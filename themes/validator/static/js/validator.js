var validation = {

    submit: function() {

        validation.report(validation.validate(document.getElementById("code").value));

    },

    validate: function(code) {

      
        return JSON.parse(code);

    },

    report: function(output) {
        alert(output);
    }

}