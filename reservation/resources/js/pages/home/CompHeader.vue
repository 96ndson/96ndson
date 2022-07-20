<template>
    <b-container class="header">
        <b-navbar toggleable="lg"   class="header-body">
            <b-navbar-brand href="#"><img
                    src="https://cdn2.tablecheck.com/shops/557ecc9ba0749e2a48003703/tc_header_images/md/DAZZLE_WD%E3%83%AD%E3%82%B4.png?1473998345"
                    alt="" class="header-img"></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav>
                        <div class="header-item">
                            <font-awesome-icon icon="question" class="icon" />
                            <b-nav-item href="#" class="header-text" >
                                Help
                            </b-nav-item>
                        </div>
                        <div class="header-item">
                            <font-awesome-icon icon="fa-solid fa-earth-asia" class="icon" />
                            <b-nav-item-dropdown text="English" class="header-text" right>
                                <b-dropdown-item href="#">EN</b-dropdown-item>
                                <b-dropdown-item href="#">ES</b-dropdown-item>
                                <b-dropdown-item href="#">RU</b-dropdown-item>
                                <b-dropdown-item href="#">FA</b-dropdown-item>
                            </b-nav-item-dropdown>
                        </div>
                        <div class="header-item">
                            <font-awesome-icon icon="fa-solid fa-utensils" class="icon" />
                            <b-nav-item href="#" class="header-text" >
                                My Reservations
                            </b-nav-item>
                        </div>

                    </b-navbar-nav>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </b-container>
</template>

<script>
export default {
    name: 'Comp-Header',

    data() {
        return {

        };
    },
};
</script>

<style >
</style>