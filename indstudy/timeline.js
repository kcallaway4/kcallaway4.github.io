var controller = new ScrollMagic.Controller()

var scenes = triggerEls.map(function(el) {
	var step = +el.getAttribute('data-step')

	var scene = new ScrollMagic.Scene({
		triggerElement: el,
		triggerHook: 'onCenter',
	})

	scene
		.on('enter', function(event) {
			graphic.update(step)
		})
		.on('leave', function(event) {
			var nextStep = Math.max(0, step - 1)
			graphic.update(nextStep)
		})
	
	scene.addTo(controller)
})

var enterExitScene = new ScrollMagic.Scene({
	triggerElement: graphicEl,
	triggerHook: '0',
	duration: graphicEl.offsetHeight - viewportHeight,
})

enterExitScene
	.on('enter', function(event) {
		var fixed = true
		var bottom = false
		toggle(fixed, bottom)
	})
	.on('leave', function(event) {
		var fixed = false
		var bottom = event.scrollDirection === 'FORWARD'
		toggle(fixed, bottom)
	})

enterExitScene.addTo(controller)