var pinItImage = $( '.entry-content img' );

		pinItImage.each( function() {

			var pinImage = $( this ),
				parentPin = pinImage.parent(),
				pinLink;

			if ( pinImage.closest( 'a' ).length != 0 ) {

				pinImage = pinImage.closest( 'a' );

			}

			if ( !pinImage.parents( 'figure' ).length ) {

				$( pinImage ).wrap( '<figure class="pin-it-wrapper"></figure>' );

			} else {

				parentPin.closest( 'figure' ).addClass( 'pin-it-wrapper' );

			}

			parentPin = pinImage.parent();

			if ( pinImage.is( 'img' ) ) {

				pinLink = pinImage.attr( 'src' ) || pinImage.attr( 'srcset' ) || pinImage.data( 'src' );

			}

			if ( pinImage.hasClass( 'alignleft' ) ) {

				pinImage.removeClass( 'alignleft' );
				pinImage.closest( 'figure' ).addClass( 'alignleft' );

			} else if ( pinImage.hasClass( 'alignright' ) ) {

				pinImage.removeClass( 'alignright' );
				pinImage.closest( 'figure' ).addClass( 'alignright' );

			} else if ( pinImage.hasClass( 'aligncenter' ) ) {

				pinImage.removeClass( 'aligncenter' );
				pinImage.closest( 'figure' ).addClass( 'aligncenter' );

			} else if ( pinImage.hasClass( 'alignnone' ) ) {

				pinImage.removeClass( 'alignnone' );
				pinImage.closest( 'figure' ).addClass( 'alignnone' );

			} else if ( pinImage.hasClass( 'alignwide' ) ) {

				pinImage.removeClass( 'alignwide' );
				pinImage.closest( 'figure' ).addClass( 'alignwide' );

			} else if ( pinImage.hasClass( 'alignfull' ) ) {

				pinImage.removeClass( 'alignfull' );
				pinImage.closest( 'figure' ).addClass( 'alignfull' );

			}

			// Get Title and img to pin - encode them
			var postLink = $( location ).attr( 'href' ),
				pinDesc = $( 'h1.entry-title' ).text();

			pinLink = encodeURIComponent( pinLink );
			postLink = encodeURIComponent( postLink );
			pinDesc = encodeURIComponent( pinDesc );

			// Generate link
			var link = 'http://www.pinterest.com/pin/create/bookmarklet/';
			link += '?url=' + postLink;
			link += '&amp;media=' + pinLink;
			link += '&description=' + pinDesc;
			link += '&is_video=false';

			//set pin-it button
			var pinButton = $( '<a href="'+link+'" class="pin-it-btn" target="_blank"><i class="sou-pinterest"></i></a>' );

			//add pin-it button
			parentPin.append( pinButton );

		});
