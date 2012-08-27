/**
 * fl.DisplayObject - inspired in actionscript 3
 * 
 * @version 0.4
 *
 * @author Bruno Dias
 * @since 09.08.2011
 *
 * Create by Bruno Dias | contact[at]diasbruno.com.br.
 */
fl.DisplayObject = function(elem_id, elem_type, elem_css) {
	
	/**
	 * Store the id.
	 */
	var i_id 	= (elem_id === null ? "" : elem_id);
	/**
	 * Store the DOMElement node name.
	 */
	var i_type 	= (elem_type === null ? "div" : elem_type);
	/**
	 * Store the css class name.
	 */
	var i_css  	= (elem_css === null ? "" : elem_css);
	
	/**
	 * Try to get an DOMElement if it exists.
	 * @param id id name.
	 * @returns DOMElement
	 */
	var i_get = function ( id ) {

		var obj = document.getElementById( id ) || null;
		
		if (obj) {
			icss = ( obj["className"] === undefined ) ? "" : obj["className"];
			itype = obj.nodeName.toLowerCase();
			
			return obj;
		}
		
		return 0;
	};

	/**
	 * Try to find an existent DOMElement.
	 * @param i DOMElement id.
	 * @param t DOMElement node name.
	 * @param c CSS Name class.
	 */
	var i_new = function ( i , t , c ) {

		var obj = document.createElement( t );
		
		obj.id = i || null;
		obj.className = c || null;

		return o;
	};
		
		// use to get and set styles. 
	var i_style = function ( property , value ) {
			
		if ( i.style )
		{
			if ( property && value ) {

				i.style[ property ] = value;

			} else {
			
				return i.style[ property ];
			}
		}

	};
	
	var i_html = function(i) {
		return (i.outerHTML !== undefined) ? i.outerHTML : (function(n) {
			var div = i_new( "r" + ( 100 * Math.random() ) , "div" , "" ), h;
			div.appendChild( n.cloneNode(true) );
			h = div.innerHTML;
			div = null;
			return h;
		})(i);
	};
		
	/**
	 * Try to get the real object, if exist in html, or create a new element.
	 * @param i id name.
	 * @param t DOMElement node name.
	 * @param c CSS class name.
	 * @return DOMElement
	 */
	var i = (function(i, t, c) {
		var obj = i_get( i_id );
		
		return (obj !== 0 ? obj : i_new( i , t , c ));
	})(i_id, i_type, i_css);

	/**
	 * Return a element id.
	 * @return  			String
	 */
	this.id 	 = function () { return i_id;   };
	/**
	 * Return a element type.
	 * @return  			String
	 */
	this.type 	 = function () { return i_type; };
	/**
	 * Return a element CSS name.
	 * @return  			String
	 */
	this.css 	 = function () { return i_css; };
	/**
	 * Return a element itself.
	 * @return  			DOMElement
	 */
	this.dom 	 = function () { return i; };
	
	// If you like jQuery!! :)
	
	/**
	 * Return a CSS id style.
	 * @return 				String
	 */
	this.$id 	 = function () { return "#" + i_id; };
	/**
	 * Return a CSS name style.
	 * @return 				String
	 */
	this.$css 	 = function () { return "." + i_css; };

	/**
	 * Add a object or string to the display object.
	 *
	 * @param 			child 				string
	 */
	this.addChild = function ( child ) {
		if ( child.html ) {
			i.appendChild( child.dom() );
		} else { 
			i.innerHTML += child;
		}
	};

	/**
	 * Remove a object or string to the display object.
	 *
	 * @param 			child 				string or a DOMElement
	 */
	this.removeChild = function( child ) {
		i.removeChild( ( ( child.dom ) ? child.dom() : child ) ); 
	};

	// Objects properties

	/**
	 * Set an alpha value.
	 * @param value The new alpha value.
	 * @returns Number
	 */
	this.alpha = function( value ) { 
		if ( value == null ) { 
			return 1 * i_style( "opacity" );
		} else { 
			i_style( "opacity" , value ); 
		}
	};

	/**
	 * Get/Set the visibility value.
	 * @param value The visible value.
	 * @returns Number
	 */
	this.visible = function( value ) { 
		if ( value == null ) { 
			return i_style( "display" ); 
		} else { 
			i_style( "display" , value ); 
		}
	};

	/**
	 * Get/Set the x position value.
	 * @param value The new x value.
	 * @returns Number
	 */
	this.x = function( value ) { 
		if ( value == null ) { 
			return parseInt( i_style( "left" ).replace( "px" , "" ) ); 
		} else { 
			i_style( "left" , value + "px" ); 
		}
	};
	
	/**
	 * Get/Set the y position value.
	 * @param value The new y value.
	 * @returns Number
	 */
	this.y = function( value ) { 
		if ( value == null ) { 
			return parseInt( i_style( "top" ).replace( "px" , "" ) ); 
		} else { 
			i_style( "top" , value + "px" ); 
		}
	};

	/**
	 * Get/Set the width value.
	 * @param value The width value.
	 * @returns Number
	 */
	this.width = function( value ) { 
		if ( value == null ) { 
			return parseInt( i_style( "width" ).replace( "px" , "" ) ); 
		} else { 
			i_style( "width" , value + "px" ); 
		}
	};
	
	/**
	 * Get/Set the height value.
	 * @param value The height value.
	 * @returns Number
	 */
	this.height = function( value ) {
		if ( value == null ) { 
			return parseInt( i_style( "height" ).replace( "px" , "" ) ); 
		} else { 
			i_style( "height" , value + "px" ); 
		}
	};
	
	/**
	 * Export a rectangle from this object.
	 * @param value	Rect
	 * @returns Rect
	 */
	this.rect = function( value ) {
		var r = ( value !== null ) ? value : new fl.Rect();
		if ( value === null ) { 
			r.x = this.x();
			r.y = this.y();
			r.width = this.width();
			r.height = this.height();
			return r; 
		} else { 
			this.x(r.x);
			this.y(r.y);
			this.width(r.width);
			this.height(r.height);
		}
	};
	
	/**
	 * Add a event listener.
	 * @param type String
	 * @param func function
	 */
	this.addEventListener = function( type , func ) {
		i[ "on" + type ] = func;
	};

	/**
	 * Remove a listener. It can accept a function, cause if we are working with <a> tag
	 * we would like, sometimes, to prevent it to load the link.
	 * @param type String
	 * @param func Function
	 */
	this.removeEventListener = function( type , func ) {
		i[ "on" + type ] = func || fl.nullFN;
	};

	/**
	 * Check if the object has some event listeners.
	 * @param  type String
	 * @return Boolean
	 */
	this.hasEventListener = function( type ) {
		return !!i[ "on" + type ];
	};

	/**
	 * Return the as tag string.
	 * @returns String
	 */
	this.html = function () {
		return i_html(i);
	};

	/**
	 * To string.
	 * @return    {String} 
	 */
	this.toString = function() {
		return "[DisplayObject " + "id: " + iid + ", type: " + itype + ", className: " + icss + "]";	
	};
	
};