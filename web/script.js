window.addEventListener('message', function(event) {
	item = event.data;
	switch (event.data.action) {
		case 'show':
            $('#interact-text-a').html(item.text);

            if (item.key) {
                $('#interact-key-a').html(item.key);
                $("#interact-key").show();
            }

            $('body').fadeIn();
        break
        case 'hide':
            $('body').fadeOut();
            setTimeout(() => {
                $('#interact-key-a').html("");
                $('#interact-text-a').html("");
                $("#interact-key").hide();
            }, 350);
        break
    }
});