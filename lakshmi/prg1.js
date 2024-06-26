function vote() {
    var name = document.getElementById("name").value;
    var marks = document.getElementById("marks").value;
    var p = document.getElementById("p")
    if (marks >= 35) {
        p.innerHTML = name + "result is pass" + pass;
    } else {
        p.innerHTML = name + "result is fail" + fail;
    }
}