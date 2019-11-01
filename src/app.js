import './css/base.css'
import './css/font.css'

function addPage (component) {
  $('.page').empty().append(component)
}

$('.router-link').click(function () {
  const page = $(this).attr('target')

  if (page === 'yumanli') {
    import(/* webpackChunkName: 'yumanli' */ './components/yumanli').then(({ default: component }) => addPage(component))
  } else if (page === 'lvhanzhi') {
    import(/* webpackChunkName: 'lvhanzhi' */ './components/lvhanzhi').then(({ default: component }) => addPage(component))
  }
})
