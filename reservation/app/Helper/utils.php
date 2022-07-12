<?php

use App\Helper\Constant;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

function formatException($exception)
{
    return [
        'exception' => get_class($exception),
        'file' => $exception->getFile(),
        'line' => $exception->getLine(),
        'message' => $exception->getMessage(),
    ];
}

function responseError($code, $message, $errors = [])
{
    $output = [
        'message' => $message,
        'errors' => $errors
    ];
    return response()->json($output, $code);
}

function responseOK($data = null)
{
    return response()->json($data, 200);
}

function responseCreated($data = null)
{
    return response()->json(($data ?: []), 201);
}

function responseUpdatedOrDeleted()
{
    return response(null, 204);
}

function responseBadRequest($message)
{
    return response()->json(['message' => $message], 400);
}

function responseNotFound($message)
{
    return response()->json(['message' => $message], 404);
}

function responseValidate($errors, $message = 'The given data was invalid.')
{
    $output = [
        'message' => $message,
        'errors' => $errors
    ];
    return response()->json($output, 422);
}

function generateImageToken($filename)
{
    return generateTokenMd5($filename);
}

function generateToken($length = 20, $prefix = null)
{
    return $prefix . Str::random($length - strlen($prefix));
}

function generateTokenMd5($filename)
{
    return md5($filename . microtime());
}

function extractByKeys(array $keys, array $sourceArr)
{
    $subArr = [];
    foreach ($sourceArr as $key => $value) {
        if (in_array($key, $keys) && !empty($value)) {
            $subArr[$key] = $value;
        }
    }
    return $subArr;
}

function extractValuesByKeys(array $keys, array $sourceArr)
{
    return array_values(extractByKeys($keys, $sourceArr));
}

function arrayValueByKey($key, array $arr)
{
    return $arr[$key] ?: null;
}

function addNewLine(string $text)
{
    return "\n $text";
}

function isDate($value)
{
    if (!$value) {
        return false;
    }
    try {
        new \DateTime($value);
        return true;
    } catch (\Exception $e) {
        return false;
    }
}

function addSecondToTimeStart($time)
{
    if (is_null($time)) {
        return null;
    }
    return isDate($time) ? Carbon::parse($time)->format('Y-m-d H:i') . ':00' : null;
}

function toStartOfDay($time)
{
    if (is_null($time)) {
        return null;
    }
    return isDate($time) ? Carbon::parse($time)->startOfDay()->format('Y-m-d H:i:s') : null;
}

function toEndOfDay($time)
{
    if (is_null($time)) {
        return null;
    }
    return isDate($time) ? Carbon::parse($time)->endOfDay()->format('Y-m-d H:i:s') : null;
}

function addSecondToTimeEnd($time)
{
    if (is_null($time)) {
        return null;
    }
    return isDate($time) ? Carbon::parse($time)->format('Y-m-d H:i') . ':59' : null;
}

function stringContains(string $haystack, string $needle)
{
    return strpos($haystack, $needle) !== false;
}

function timeRangeArray($from, $to, $format = 'Y-m-d H:i:s')
{
    $carbonDateRange = CarbonPeriod::create($from, $to);
    $dateArr = [];
    foreach ($carbonDateRange as $date) {
        $dateArr[] = $date->format($format);
    }
    return $dateArr;
}

function respondWithToken($token, $type = 'api', $refreshToken = null, $user = null)
{
    $response = [
        'access_token' => $token,
        'token_type' => 'bearer',
        'expires_in' => auth('api')->factory()->getTTL() * 60,
    ];
    if ($refreshToken) {
        $response['refresh_token'] = $refreshToken;
    }
    if ($type === 'api') {
        $response['user'] = $user ? $user : Auth::user();
    } else {
        $response[$type] = $user ? $user : auth($type)->user();
    }

    return responseCreated($response);
}


