function Atom(atomicNumber) {
	this.atomicNumber = atomicNumber ;
	this.noOfElectrons = atomicNumber ;
	this.firstModel = firstModel ;
	this.secondModel = secondModel ;
	this.thirdModel = thirdModel ;
}
function firstModel() {
	var noOfElectrons = this.atomicNumber ;
	var group = new THREE.Group() , i = 1, r = 0.9;
	var nucleus = new THREE.Mesh(
		new THREE.SphereBufferGeometry(0.4, 32, 32),
		new THREE.MeshBasicMaterial({color : 0xffdae3})
	);
	group.add(nucleus) ;
	while(noOfElectrons > 0) {
		var electrons = Math.min(2*i*i, noOfElectrons) ;
		var shell = new Shell(r, electrons) ;
		group.add(shell.orbit) ;
		r += 0.3 ; i++ ;
		noOfElectrons -= electrons ;
	}
	return group ;
}
function secondModel() {
	/*electrons distribution*/
	var noOfElectrons = this.atomicNumber ;
	var group = new THREE.Group() , i = 1, r = 0.9;
	var nucleus = new THREE.Group() ;
	while(noOfElectrons > 0) {
		var electrons = Math.min(2*i*i, noOfElectrons) ;
		var shell = new Shell(r, electrons) ;
		group.add(shell.orbit) ;
		r += 0.3 ; i++ ;
		noOfElectrons -= electrons ;
	}
	/*end of electrons distribution*/
	
	/*code for nucleus*/
	var pro_col = "springgreen" ;
	var neu_col = "steelblue" ;
	var angle1, angle2, electrons = this.atomicNumber, multiplication_factor ;
	multiplication_factor = electrons/180 ;
		
	/*code for adding neutrons and protons*/
	for(var i = 0; i < electrons; i++) {
		angle1 = Math.acos( -1 + ( 2 * i ) / electrons );
		angle2 = Math.sqrt( electrons * Math.PI ) * angle1;
		var x =	Math.cos( angle2 ) * multiplication_factor * Math.sin( angle1 );
		var y = Math.sin( angle2 ) * multiplication_factor * Math.sin( angle1 );
		var z = Math.cos( angle1 ) * multiplication_factor ;
		var proton = new THREE.Mesh(
			new THREE.SphereBufferGeometry(0.1, 32, 32),
			new THREE.MeshBasicMaterial({color : pro_col})
		);
		proton.position.set(x, y, z) ;
		proton.name = "proton"+i ;
		nucleus.add(proton);
		var neutron = new THREE.Mesh(
			new THREE.SphereBufferGeometry(0.1, 32, 32),
			new THREE.MeshBasicMaterial({color : neu_col})
		);
		angle1 = Math.acos( -1 + ( 2 * i ) /  electrons );
		angle2 = Math.sqrt( 2 * electrons * Math.PI ) * angle1;
		x = Math.cos( angle2 ) * multiplication_factor *Math.sin( angle1 ) ;
		y = Math.sin( angle2 ) * multiplication_factor *Math.sin( angle1 ) ;
		z = Math.cos( angle1 ) * multiplication_factor  ;
		neutron.position.set(x, y, z) ;
		neutron.name = "neutron"+i ;
		nucleus.add(neutron);		
	}
	/*end of code for adding neutrons and protons*/
	scene.add(nucleus) ;
	
	/*end of code for nucleus*/
	return group ;	
}
function thirdModel() {
	var noOfElectrons = this.atomicNumber ;
	var group = new THREE.Group() , i = 1, r = 0.9;
	var nucleus = new THREE.Mesh(
		new THREE.SphereBufferGeometry(0.4, 32, 32),
		new THREE.MeshBasicMaterial({color : 0xffdae3})
	);
	group.add(nucleus) ;
	while(noOfElectrons > 0) {
		var electrons = Math.min(2*i*i, noOfElectrons) ;
		var shell = new Shell(r, electrons) ;
		r += 0.3 ; i++ ;
		noOfElectrons -= electrons ;
		if(noOfElectrons == 0) {
			group.add(shell.orbit) ;
		}
	}
	return group ;
}
