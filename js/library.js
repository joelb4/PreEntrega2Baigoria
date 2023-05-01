alertify.defaults.background = "bg-dark"
alertify.defaults.transition = "slide"
alertify.defaults.theme.ok = "btn btn-success"
alertify.defaults.theme.cancel = "btn btn-danger"
alertify.defaults.theme.input = "form-control"
alertify.defaults.glossary.ok = "Confirmar"
alertify.defaults.glossary.cancel = "Cancelar"
alertify.set('notifier','position', 'bottom-right')

const notificacion = (texto,tipo)=> {
    alertify.notify(texto,tipo, 2).dismissOthers()
}