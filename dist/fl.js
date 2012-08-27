/**
 * fl.js
 * 
 * @author Bruno Dias
 * @since 10.13.2011
 *
 * @version 0.4
 * 
 * TODO: remake unit test - cross-browser.
 *
 * Create by Bruno Dias | contact[at]diasbruno.com.br.
 */
var fl = function() {
	this.nullFN = function(){};
};

/**
 * List of events.
 *
 * @version 0.4
 *
 * @author Bruno Dias
 * @since 09.08.2011
 * 
 * Create by Bruno Dias | contact[at]diasbruno.com.br.
 */

fl.MouseEvent = {
	CLICK: "click",
	MOUSE_OVER: "mouseover",
	MOUSE_OUT: "mouseout"
};

/**
 * Math utils for fl.js
 *
 * @version 0.4
 *
 * @author Bruno Dias
 * @since 09.08.2011
 * 
 * Create by Bruno Dias | contact[at]diasbruno.com.br.
 */

/**
 * fl.*
 * 
 * @version 0.4
 *
 * @author Bruno Dias
 * @since 09.08.2011
 * 
 * Create by Bruno Dias | contact[at]diasbruno.com.br.
 */

/**
 * Pythagoras. c = (a2+b2)^2
 * @param a 
 * @param b
 * @return c
 */
fl.Py = function(a,b) { return Math.sqrt((a*a)+(b*b)); };

/** 
 * 2d point.
 * @param x X position.
 * @param y	Y position.
 */ 
fl.Point = function ( x, y ) { 

	this.x = x || 0; 
	this.y = y || 0; 

	/**
	 * Add a point to another.
	 * @param 		p 				Point
	 */
	this.add = function( point ) { 
		this.x += point.x; 
		this.y += point.y; 
	};
	/**
	 * Subtract a point to another.
	 * @param 		p 				Point
	 */
	this.subtract = function( point ) { 
		this.x -= point.x; 
		this.y -= point.y; 
	};
	/**
	 * Calculate the distance between this current point and another.
	 * @param 		p 				Point
	 */
	this.distance = function( point ) { 
		var a = point.x - this.x, 
			b = point.y - this.y; 
		
		return fl.Py(a,b); 
	};
	/**
	 * Return the hypotenuse.
	 * @return 						Number
	 */
	this.length = function() { 
		return fl.Py(this.x,this.y); 
	};
	/**
	 * Send a point and if this point has the same coordenates return true.
	 * @param 		p 				Point
	 * @return 						Boolean
	 */
	this.equal = function(point) { 
		return ((this.x == point.x) && (this.y == point.y)); 
	};
	/**
	 * Clone the point.
	 * @return 						Point
	 */
	this.clone = function() { 
		return new fl.Point(this.x, this.y); 
	};
	/**
	 * Expose the information of the point as an String.
	 * @return 						String
	 */
	this.toString = function() { 
		return "[P x: " + this.x + ", y: " + this.y + "]"; 
	};
};

// 
// Rectangle.
// 
// @param 			x				X position.
// @param 			y				Y position.
// @param 			w				Width size.
// @param 			h				Height size.
// 
// @author Bruno Dias
// @since 09.08.2011
// 
fl.Rect = function( x , y , width , height) { 

	this.x 		= x; 
	this.y 		= y; 
	this.width 	= width; 
	this.height = height; 

	this.scale = 1; 

	this.scale = function(scale) { 
		if (scale) {
			
			this.scale = scale;
			this.width *= s;
			this.height *= s;

		} 
		else { return this.scale; }
	};
	/**
	 * Clone the rectangle.
	 * @return 						Point
	 */
	this.clone = function() { 
		return new fl.Rect(this.x, this.y, this.width, this.height); 
	},
	/**
	 * Expose the information of the rectangle as an String.
	 * @return 						String
	 */
	this.toString = function() { 
		return "[Rect x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + this.height + "]"; 
	};
};

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

/**
 * fl.Timeline
 * 
 * @author Bruno Dias
 * @since 09.08.2011
 * 
 * @version 0.4
 *
 * Create by Bruno Dias | contact[at]diasbruno.com.br.
 */

/**
 * Create a new timeline.
 */
fl.Timeline = function( label ) {
	var that = this;

	/**
	 * A label for a the timeline.
	 * Better use of label is define as the id of an object.
	 */	
	 that.label = label;
	/**
 	 * Layers we will create.
 	 * NOTE: only displayobjects.
 	 */
	that.layers = [];
	/**
 	 * Properties we will create.
 	 * NOTE: only displayobjects.
 	 */
	that.displayList = [];
	/**
	 * In case you need to reset the timeline.
	 */
	that.reset = fl.nullFN;
	/**
	 * Plays the timeline.
	 */
	that.play = fl.nullFN;

	/**
	 * Create our layers. Before it you have to add them in the layers when you want in the timeline.
	 */
	that.create = function() {
		// objects, current object, element, iterator.
		var objs = that.layers, obj, ele = null, i;
		for (i in objs) {
			obj = objs[i];
			ele = new fl.DisplayObject(obj.id, obj.type, obj.className);
			that.displayList.push( ele );
		}
	};
	
	/**
	 * To string.
	 */
	this.toString = function() { return "[Timeline]"; };

};


/**
 * fl.Scene
 *
 * @author Bruno Dias
 * @since 09.08.2011
 *
 * @version 0.4
 *
 * Create by Bruno Dias | contact[at]diasbruno.com.br.
 */

fl.Scene = function(ts) {
	// Retain the real reference to this.
	var that = this,
		timelines = ts||[],
		actual = 0,
		numTimelines = timelines.length;

	that.change = function(callback) {
		var next = actual + 1,
			t1 = timelines[actual],
			t2 = timelines[next];

		if ( next > numTimelines - 1 ) 
			t2 = timelines[(next=0)];

		if ( callback !== undefined )
			callback( t1, t2 );

		actual = next;
	};

	that.play = function() {
	    var timeline = timelines[actual];
	    if ( timeline.reset !== undefined ) 
	    	timeline.reset();
		timeline.play();
	};

	return that;
};



/**
 * fl.js
 * 
 * @author Bruno Dias
 * @since 10.13.2011
 *
 * @version 0.4
 * 
 * TODO: remake unit test - cross-browser.
 *
 * Create by Bruno Dias | contact[at]diasbruno.com.br.
 */
var fl = function() {
	this.nullFN = function(){};
};

/**
 * List of events.
 *
 * @version 0.4
 *
 * @author Bruno Dias
 * @since 09.08.2011
 * 
 * Create by Bruno Dias | contact[at]diasbruno.com.br.
 */

fl.MouseEvent = {
	CLICK: "click",
	MOUSE_OVER: "mouseover",
	MOUSE_OUT: "mouseout"
};

/**
 * Math utils for fl.js
 *
 * @version 0.4
 *
 * @author Bruno Dias
 * @since 09.08.2011
 * 
 * Create by Bruno Dias | contact[at]diasbruno.com.br.
 */

/**
 * fl.*
 * 
 * @version 0.4
 *
 * @author Bruno Dias
 * @since 09.08.2011
 * 
 * Create by Bruno Dias | contact[at]diasbruno.com.br.
 */

/**
 * Pythagoras. c = (a2+b2)^2
 * @param a 
 * @param b
 * @return c
 */
fl.Py = function(a,b) { return Math.sqrt((a*a)+(b*b)); };

/** 
 * 2d point.
 * @param x X position.
 * @param y	Y position.
 */ 
fl.Point = function ( x, y ) { 

	this.x = x || 0; 
	this.y = y || 0; 

	/**
	 * Add a point to another.
	 * @param 		p 				Point
	 */
	this.add = function( point ) { 
		this.x += point.x; 
		this.y += point.y; 
	};
	/**
	 * Subtract a point to another.
	 * @param 		p 				Point
	 */
	this.subtract = function( point ) { 
		this.x -= point.x; 
		this.y -= point.y; 
	};
	/**
	 * Calculate the distance between this current point and another.
	 * @param 		p 				Point
	 */
	this.distance = function( point ) { 
		var a = point.x - this.x, 
			b = point.y - this.y; 
		
		return fl.Py(a,b); 
	};
	/**
	 * Return the hypotenuse.
	 * @return 						Number
	 */
	this.length = function() { 
		return fl.Py(this.x,this.y); 
	};
	/**
	 * Send a point and if this point has the same coordenates return true.
	 * @param 		p 				Point
	 * @return 						Boolean
	 */
	this.equal = function(point) { 
		return ((this.x == point.x) && (this.y == point.y)); 
	};
	/**
	 * Clone the point.
	 * @return 						Point
	 */
	this.clone = function() { 
		return new fl.Point(this.x, this.y); 
	};
	/**
	 * Expose the information of the point as an String.
	 * @return 						String
	 */
	this.toString = function() { 
		return "[P x: " + this.x + ", y: " + this.y + "]"; 
	};
};

// 
// Rectangle.
// 
// @param 			x				X position.
// @param 			y				Y position.
// @param 			w				Width size.
// @param 			h				Height size.
// 
// @author Bruno Dias
// @since 09.08.2011
// 
fl.Rect = function( x , y , width , height) { 

	this.x 		= x; 
	this.y 		= y; 
	this.width 	= width; 
	this.height = height; 

	this.scale = 1; 

	this.scale = function(scale) { 
		if (scale) {
			
			this.scale = scale;
			this.width *= s;
			this.height *= s;

		} 
		else { return this.scale; }
	};
	/**
	 * Clone the rectangle.
	 * @return 						Point
	 */
	this.clone = function() { 
		return new fl.Rect(this.x, this.y, this.width, this.height); 
	},
	/**
	 * Expose the information of the rectangle as an String.
	 * @return 						String
	 */
	this.toString = function() { 
		return "[Rect x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + this.height + "]"; 
	};
};

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

/**
 * fl.Timeline
 * 
 * @author Bruno Dias
 * @since 09.08.2011
 * 
 * @version 0.4
 *
 * Create by Bruno Dias | contact[at]diasbruno.com.br.
 */

/**
 * Create a new timeline.
 */
fl.Timeline = function( label ) {
	var that = this;

	/**
	 * A label for a the timeline.
	 * Better use of label is define as the id of an object.
	 */	
	 that.label = label;
	/**
 	 * Layers we will create.
 	 * NOTE: only displayobjects.
 	 */
	that.layers = [];
	/**
 	 * Properties we will create.
 	 * NOTE: only displayobjects.
 	 */
	that.displayList = [];
	/**
	 * In case you need to reset the timeline.
	 */
	that.reset = fl.nullFN;
	/**
	 * Plays the timeline.
	 */
	that.play = fl.nullFN;

	/**
	 * Create our layers. Before it you have to add them in the layers when you want in the timeline.
	 */
	that.create = function() {
		// objects, current object, element, iterator.
		var objs = that.layers, obj, ele = null, i;
		for (i in objs) {
			obj = objs[i];
			ele = new fl.DisplayObject(obj.id, obj.type, obj.className);
			that.displayList.push( ele );
		}
	};
	
	/**
	 * To string.
	 */
	this.toString = function() { return "[Timeline]"; };

};


/**
 * fl.Scene
 *
 * @author Bruno Dias
 * @since 09.08.2011
 *
 * @version 0.4
 *
 * Create by Bruno Dias | contact[at]diasbruno.com.br.
 */

fl.Scene = function(ts) {
	// Retain the real reference to this.
	var that = this,
		timelines = ts||[],
		actual = 0,
		numTimelines = timelines.length;

	that.change = function(callback) {
		var next = actual + 1,
			t1 = timelines[actual],
			t2 = timelines[next];

		if ( next > numTimelines - 1 ) 
			t2 = timelines[(next=0)];

		if ( callback !== undefined )
			callback( t1, t2 );

		actual = next;
	};

	that.play = function() {
	    var timeline = timelines[actual];
	    if ( timeline.reset !== undefined ) 
	    	timeline.reset();
		timeline.play();
	};

	return that;
};

