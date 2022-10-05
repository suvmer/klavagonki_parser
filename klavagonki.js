(function(delay) {
    var text, words;
    
	text = '';

    change = getEventListeners(document.getElementById('inputtext')).keyup[0].listener;
    var ii = 0;

    var funcc = function(){
		if(text == '' && document.getElementById("waiting_timeout").innerHTML == "00:02") {
			for(let element of document.getElementById('typetext').children[0].children) {
				if(element.children.length != 0) {
					for(let el1 of element.children) {
						if(el1.style.display != "none")
							text += el1.innerHTML;
					}
				} else {
					if(element.style.display != "none")
						text += element.innerHTML;
				}
			}
			
			text = text.replace('o','о');
			text = text.replace('e','е');
			text = text.replace('е','е');
			text = text.replace('p','р');
			text = text.replace('c','с');
			text = text.replace('н','н');
			text = text.replace('а','а');
			text = text.replace('х','х');
			text = text.replace('o','о');
			text = text.replace('д','д');
			text = text.replace('я','я');
			text = text.replace('т','т');
			text = text.replace('с','с');
			text = text.replace("<br/>","");
			//text = text.replace(/[^а-яёА-ЯЁ ]/g,"");
			words = text.split(' ');
		}
		
		if(!document.querySelector('#inputtext').disabled) {
			if (!document.getElementById('inputtext').value) {
				change({target: {value: words[ii]+' '}})
				ii++;
			}
		}
	}

    setInterval(funcc, delay);
})(0);
