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
