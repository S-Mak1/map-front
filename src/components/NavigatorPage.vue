<template>  
  <div class="hello">
    <NavBar> </NavBar>
    <h1>{{ msg }}</h1>
    
    <p class="lead">
Подробная навигация всегда с вами
</p>
<p>
<a class="btn btn-lg btn-success" href="//maps.me/android-app-pro" target="_blank">
Android
</a>
<a class="btn btn-lg btn-success" href="//maps.me/iphone-app-pro" target="_blank">
Iphone
</a>
</p>

<div class="body-content">
<div class="row">
<div class="col-lg-4">
<h2>Актуально</h2>
<p>
Информация обновляется миллионами пользователей по всему миру.
Ежедневно.
</p>
<p>
База в устройстве обновляется ежемесячно
</p>
</div>
<div class="col-lg-4">
<h2>Работает оффлайн</h2>
<p>
Карта доступна для скачивания и работает везде,
даже при отсутствии сигнала сотовой сети
</p>
</div>
<div class="col-lg-4">
<h2>Подробные</h2>
<p>
Оцените высокий уровень детализации!
Тысячи объектов на карте – отели, рестораны, банкоматы...
</p>
<p><a class="btn btn-default" href="//maps.me">Узнать ещё</a></p>
</div>
</div>
</div>
</div>

</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'NavigatorPage',
  data () {
    return {
      msg: 'Карта для навигатора, смартфона, телефона '
    }
  },
  components: {
    NavBar
  }
}
</script>

