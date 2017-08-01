var app = new Vue({
  el: '#lista',
  data: {
  		
	    formCliente:{
	    	idSelect:"", idSexo:"", nom:"", ape:"", dia:"", mes:"", anio:"", tel:"", correo:"", pass:""
	    }
	    ,
	    bdListaroles:[],
	    bdListaUsers:[],
	    bdListasexo:[]
	},
    http: { 
            root: 'http://localhost:8000/',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
            }
    },
    methods: {
    		llenaSelectSexo(){
    			this.$http.get('/verSexo').then(function(response){
	      			this.bdListasexo = response.body;
	      			console.log(response.body);
	    		})

    		},
    		llenarSelect(){
	    		this.$http.get('verRoles').then(function(response){
	      			this.bdListaroles = response.body;
	      			console.log(response.body);
	    		})

			},
			llenarTable(){
				this.$http.get('/mostrarUsers').then(function(response){
						this.bdListaUsers = response.body;
						console.log(response.body);
				})
			},
			obtenerId(id){
				alert(id);
			},
			formSave(e) {
			e.preventDefault();
           this.$http.post('guardarCliente', this.formCliente
			).then(function(response){
	      			console.log(response.body);

	      			this.llenarTable();
	      			
	  			})
		}
    },
    created(){
    	console.log(this.formCliente);
    	this.llenarSelect();
    	this.llenarTable();
    	this.llenaSelectSexo();
    }
  
})