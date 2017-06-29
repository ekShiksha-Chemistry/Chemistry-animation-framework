var sn2_flag = 1 ;
function showSN2(Text1, Text2, Text3, Text4, Text5) {

	var info = [ ], img_info = [ ], src = [ 'Images/red.png', 'Images/grey.png', 'Images/blue.png', 'Images/white.png', 'Images/green.png']; 
	var text_info = [Text1, Text2, Text3, Text4, Text5] ;
	for(var i= 0; i < 5; i++) {
		info[i] = document.createElement('div');
		info[i].style.position = 'absolute';
		var t = '' ;
		t += 50 + i*5 ;
		t += '%' ;
		info[i].style.top = t;
		info[i].style.left = "60%" ;
		info[i].style.textAlign = 'center';
		info[i].style.color = '#fff';
		info[i].style.fontWeight = 'bold';
		info[i].style.backgroundColor = 'transparent';
		info[i].style.zIndex = '1';
		info[i].style.fontFamily = 'Monospace';
		info[i].innerHTML = text_info[i] ;
		info[i].setAttribute("id", i) ;
 		document.body.appendChild(info[i]);
		
		img_info[i] = document.createElement('img');
		img_info[i].style.position = 'absolute';
		img_info[i].style.width = '2%' ;
		img_info[i].style.height = "4%" ;
		img_info[i].src = src[i] ;
		img_info[i].setAttribute("id", i+5) ;
		var t = '' ;
		t += 50 + i*5 ;
		t += '%' ;
		img_info[i].style.top = t;
		img_info[i].style.left = "55%" ;
		document.body.appendChild(img_info[i]);			
	}

	var OHGroup = new THREE.Group() ;
		
	var Oxygen = new THREE.Mesh(
		new THREE.SphereBufferGeometry(0.25, 32, 32),
		new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 'red', specular: 0x555555, shininess: 30 } )
	);	

	OHGroup.add(Oxygen) ;

	var Hydrogen = new THREE.Mesh(
		new THREE.SphereBufferGeometry(0.15, 32, 32),
		new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 'grey', specular: 0x555555, shininess: 30 } )
	);
		
	Hydrogen.position.x -= 1 ;
		
	OHGroup.add(Hydrogen) ;
		
	var material = new THREE.LineBasicMaterial({
		color: 'yellow', linewidth : 10 
	});

	var geometry = new THREE.Geometry();
	geometry.vertices.push(
		new THREE.Vector3( -1, 0, 0 ),
		new THREE.Vector3( 0, 0, 0 )
	);

	var line = new THREE.Line( geometry, material );
	OHGroup.add( line );		
		
	OHGroup.position.x -= 2 ;
	OHGroup.name = ++objectCount ;
	scene.add(OHGroup) ;	
		
	//camera.position.z = 5;

	var tet = new THREE.Group() ;

	var r = 1 ;

		var material = new THREE.LineBasicMaterial({
			color: 'yellow', linewidth : 5 
		});

		var geometry = new THREE.Geometry();
		geometry.vertices.push(
			new THREE.Vector3( 0, 0, r ),
			new THREE.Vector3( 0.5, 0, 0 )
		);
		var l1 = new THREE.Line(geometry, material) ;		

		tet.add(l1) ;

		var geometry = new THREE.Geometry();
		geometry.vertices.push(
			new THREE.Vector3( 0, r*Math.cos(Math.PI/6), -r*Math.cos(Math.PI/3) ),
			new THREE.Vector3( 0.5, 0, 0 )
		);
		var l2 = new THREE.Line(geometry, material) ;		

		tet.add(l2) ;

		var geometry = new THREE.Geometry();
		geometry.vertices.push(
			new THREE.Vector3( 0, -r*Math.cos(Math.PI/6), -r*Math.cos(Math.PI/3) ),
			new THREE.Vector3( 0.5, 0, 0 )
		);
		var l3 = new THREE.Line(geometry, material) ;		

		tet.add(l3) ;

		var b1 = new THREE.Mesh(
			new THREE.SphereBufferGeometry(0.25, 32, 32),
			new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x2e86c1,  specular: 0x555555, shininess: 30 } )
		);
		b1.position.set(0.5, 0, 0) ;
		tet.add(b1) ;

		var b2 = new THREE.Mesh(
			new THREE.SphereBufferGeometry(0.25, 32, 32),
			new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x2e4053,  specular: 0x555555, shininess: 30 } )
		);
		b2.position.set(0, -r*Math.cos(Math.PI/6), -r*Math.cos(Math.PI/3)) ;
		tet.add(b2) ;
 
		var b3 = new THREE.Mesh(
			new THREE.SphereBufferGeometry(0.25, 32, 32),
			new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x2e4053,  specular: 0x555555, shininess: 30 } )
		);
		b3.position.set(0, r*Math.cos(Math.PI/6), -r*Math.cos(Math.PI/3)) ;
		tet.add(b3) ; 

		var b4 = new THREE.Mesh(
			new THREE.SphereBufferGeometry(0.25, 32, 32),
			new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x2e4053,  specular: 0x555555, shininess: 30 } )
		);
		b4.position.set(0, 0, r) ;
		tet.add(b4) ;
		var lGroup = new THREE.Group() ;
		var b4 = new THREE.Mesh(
			new THREE.SphereBufferGeometry(0.25, 32, 32),
			new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 'green',  specular: 0x555555, shininess: 30 } )
		);
		b4.position.set(1.2, 0, 0) ;
		b4.name = ++objectCount ;
		scene.add(b4) ;

		var geometry = new THREE.Geometry();
		geometry.vertices.push(
			new THREE.Vector3( 0.5, 0, 0 ),
			new THREE.Vector3( 1.2, 0, 0 )
		);
		var l3 = new THREE.Line(geometry, material) ;
		l3.name = ++objectCount ;		
		scene.add(l3) ;
 		
 		tet.name = ++objectCount ;
 		scene.add(tet) ;
 		lGroup.name = ++objectCount ;
 		scene.add(lGroup) ;
  		var angle = Math.PI, a_angle = 0;
		var animate = function () {
			if(OHGroup.position.x <= -1.5) {
				OHGroup.rotation.z += 0.005 ;
				OHGroup.position.x += 0.0025 ;
				l3.position.x += 0.005 ;
				b4.position.x += 0.005 ;
				tet.rotation.y += 0.015 ;
			} else if(sn2_flag) {
				//deleteObjects() ;
				l3.position.x = -1.9 ;
				//tet.rotation.y += Math.PI ;
				sn2_flag = 0 ;
			}
			requestAnimationFrame( animate );
			
		};

		animate();	
}
function showSN1() {
		var sn1_flag = 1, join_flag = 1, sleep_flag = 1, another_sleep_flag = 1 ;

		var JoinGroup = new THREE.Group();
		var joinGroup = new THREE.Group() ;
		
		var firstMolecule = new THREE.Mesh(
			new THREE.SphereBufferGeometry(0.25, 32, 32),
			new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 'red', specular: 0x555555, shininess: 30 } )
		);	

		JoinGroup.add(firstMolecule) ;

		var secondMolecule = new THREE.Mesh(
			new THREE.SphereBufferGeometry(0.15, 32, 32),
			new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 'grey', specular: 0x555555, shininess: 30 } )
		);
		
		secondMolecule.position.x -= 1 ;
		
		JoinGroup.add(secondMolecule) ;
		
		var material = new THREE.LineBasicMaterial({
			color: 'yellow', linewidth : 10 
		});

		var geometry = new THREE.Geometry();
		geometry.vertices.push(
			new THREE.Vector3( -1, 0, 0 ),
			new THREE.Vector3( 0, 0, 0 )
		);

		var line = new THREE.Line( geometry, material );
		JoinGroup.add( line );		
		
		JoinGroup.position.x -= 2 ;
		JoinGroup.name = ++objectCount ;
		scene.add(JoinGroup) ;	
		

	
	
		var tet = new THREE.Group() ;

		var r = 1, attach_1 = new THREE.Group(), attach_2 = new THREE.Group(), attach_3 = new THREE.Group() ;

		var material = new THREE.LineBasicMaterial({
			color: 'yellow', linewidth : 5 
		});

		var geometry = new THREE.Geometry();
		geometry.vertices.push(
			new THREE.Vector3( 0, 0, r ),
			new THREE.Vector3( 0.5, 0, 0 )
		);
		var l1 = new THREE.Line(geometry, material) ;		

		attach_3.add(l1) ;

		var geometry = new THREE.Geometry();
		geometry.vertices.push(
			new THREE.Vector3( 0, r*Math.cos(Math.PI/6), -r*Math.cos(Math.PI/3) ),
			new THREE.Vector3( 0.5, 0, 0 )
		);
		var l2 = new THREE.Line(geometry, material) ;		

		attach_1.add(l2) ;

		var geometry = new THREE.Geometry();
		geometry.vertices.push(
			new THREE.Vector3( 0, -r*Math.cos(Math.PI/6), -r*Math.cos(Math.PI/3) ),
			new THREE.Vector3( 0.5, 0, 0 )
		);
		var l3 = new THREE.Line(geometry, material) ;		

		attach_2.add(l3) ;

		var b1 = new THREE.Mesh(
			new THREE.SphereBufferGeometry(0.25, 32, 32),
			new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x2e86c1,  specular: 0x555555, shininess: 30 } )
		);
		b1.position.set(0.5, 0, 0) ;
		tet.add(b1) ;

		var b2 = new THREE.Mesh(
			new THREE.SphereBufferGeometry(0.25, 32, 32),
			new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x000080,  specular: 0x555555, shininess: 30 } )
		);
		b2.position.set(0, -r*Math.cos(Math.PI/6), -r*Math.cos(Math.PI/3)) ;
		attach_2.add(b2) ;
 
		var b3 = new THREE.Mesh(
			new THREE.SphereBufferGeometry(0.25, 32, 32),
			new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x808000,  specular: 0x555555, shininess: 30 } )
		);
		b3.position.set(0, r*Math.cos(Math.PI/6), -r*Math.cos(Math.PI/3)) ;
		attach_1.add(b3) ; 

		var b4 = new THREE.Mesh(
			new THREE.SphereBufferGeometry(0.25, 32, 32),
			new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x2e4053,  specular: 0x555555, shininess: 30 } )
		);
		b4.position.set(0, 0, r) ;
		attach_3.add(b4) ;
		var lGroup = new THREE.Group() ;
		var b4 = new THREE.Mesh(
			new THREE.SphereBufferGeometry(0.25, 32, 32),
			new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 'green',  specular: 0x555555, shininess: 30 } )
		);
		b4.position.set(1.2, 0, 0) ;
		b4.name = ++objectCount ;
		scene.add(b4) ;

		var geometry = new THREE.Geometry();
		geometry.vertices.push(
			new THREE.Vector3( 0.5, 0, 0 ),
			new THREE.Vector3( 1.2, 0, 0 )
		);
		var l3 = new THREE.Line(geometry, material) ;
		l3.name = ++objectCount ;		
		scene.add(l3) ;
 		
 		tet.name = ++objectCount ;
 		scene.add(tet) ;
 		lGroup.name = ++objectCount ;
 		scene.add(lGroup) ;
		
		var geometry = new THREE.Geometry();
		geometry.vertices.push(
			new THREE.Vector3( -2, -2, 0 ),
			new THREE.Vector3( -2, -0.8, 0 )
		);
		var l4 = new THREE.Line(geometry, material) ;
		l4.name = ++objectCount ; 		
  		scene.add(l4) ;
  		l4.position.z = -5000 ;
  		
  		attach_1.name = ++objectCount ;
  		scene.add(attach_1) ;
  		
  		attach_2.name = ++objectCount ;
  		scene.add(attach_2) ;
  		
  		attach_3.name = ++objectCount ;
  		scene.add(attach_3) ;
  		
  		JoinGroup.position.set(3, 1, 0) ;
  		
  		var angle = 0 ; 
		var animate = function () {
			if(angle >= -0.5 && sn1_flag) {
				b4.position.x += 0.08 ;
				l3.position.x += 0.08 ;
				attach_1.rotation.z -= 0.01 ;
				attach_2.rotation.z += 0.01 ;
				attach_3.rotation.y += 0.01 ;
				angle -= 0.01 ;
			} else if(angle <= 0) {
				if(sleep_flag) {
					sleep(1000) ;
					sleep_flag = 0 ;
					secondMolecule.name = ++objectCount ;
					scene.add(secondMolecule) ;
					secondMolecule.position.set(3, 1, 0) ;
				}
				JoinGroup.position.y -= 0.02 ;
				JoinGroup.position.x -= 0.03 ;
				sn1_flag = 0 ;
				angle += 0.01 ;
				attach_1.rotation.z += 0.01 ;
				attach_2.rotation.z -= 0.01 ;
				attach_3.rotation.y -= 0.01 ;
				secondMolecule.position.y -= 0.02 ;
				secondMolecule.position.x += 0.028 ;
			}
			requestAnimationFrame( animate );
			//renderer.render(scene, camera);
		};
		animate();	
}
function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}
