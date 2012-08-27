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