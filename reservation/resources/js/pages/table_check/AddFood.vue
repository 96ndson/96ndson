<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card card-default">
          <div class="card-header">Thêm thực đơn</div>
          <div class="card-body">
            <div class="row">
              <label class="col-md-3">Ảnh</label>
              <div class="col-md-3" v-if="form.file_image">
                <img :src="form.file_image" class="img-responsive" height="70" width="90">
              </div>
              <div class="col-md-8">
                <input type="file" v-on:change="onImageChange" class="form-control">
              </div>
            </div>
            <br>
            <div class="row">
              <label class="col-md-3">Tiêu đề</label>
              <input class="col-md-6" v-model="form.title" type="text" placeholder="Nhập tiêu đề">
            </div>
            <br>
            <div class="row">
              <label class="col-md-3">Keyword</label>
              <input class="col-md-6" v-model="form.slug" type="text" placeholder="Link">
            </div>
            <br>
            <div class="row">
              <label class="col-md-3">Mô tả</label>
              <input class="col-md-6" v-model="form.description" type="text" placeholder="Nhập mô tả">
            </div>
            <br>
            <div class="row">
              <label class="col-md-3">Gía</label>
              <input class="col-md-6" v-model="form.price" type="text" placeholder="Nhập giá">
            </div>
            <br>
            <div class="row">
              <label class="col-md-3">Nội dung</label>
              <textarea class="col-md-6" v-model="form.content" placeholder="Nhập nội dung"></textarea>
            </div>
            <br>
              <button @click="addFood" class="btn btn-success btn-block" >Lưu thực đơn</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {FoodService} from '@/services'
export default {
  name: "AddFood",
  data() {
    return {
      form : {
        file_image :null,
        title:'',
        slug:'',
        shop_id: 1,
        description:'',
        content:'',
        price:null
      }
    }
  },
  methods:{
    onImageChange(e) {
        this.form.file_image = e.target.files[0]
    },
    addFood(){
      const fd = new FormData()
      fd.append('file_image',this.form.file_image,this.form.file_image.name)
      fd.append('title',this.form.title)
      fd.append('content',this.form.content)
      fd.append('description',this.form.description)
      fd.append('shop_id',this.form.shop_id)
      fd.append('slug',this.form.slug)
      fd.append('price',this.form.price)
      FoodService.addFood(fd).then(() => {
        this.$toast.success('Thêm menu thành công')
      }).catch(err =>{
        this.$toast.success(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
