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