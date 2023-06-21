<template>
    <div class="edu-breadcrumb-area custom-edu-breadcrumb-area">
        <div class="container">
            <div class="breadcrumb-inner">
                <div class="page-title">
                    <h1 class="title custom-edu-breadcrumb-area-title">{{ pageTitle ? pageTitle : title }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'pageTitle'],
    components: {
        MouseMove: () => import('@/components/animation/MouseMove')
    }
}
</script>
<style>
.custom-edu-breadcrumb-area {
    padding: 20px 0 30px !important;
}

.custom-edu-breadcrumb-area-title {
    font-size: 30px !important;
}
</style>