function insert(bil){
    document.form.textview.value = document.form.textview.value+bil
}

function samadengan(){
    var bil = document.form.textview.value
        if(bil){
            document.form.textview.value = eval(bil)
        }
}

function bersihkan(){
    document.form.textview.value = ""
}

function back(){
    var bil = document.form.textview.value
    document.form.textview.value = bil.substring(0,bil.length-1)
}