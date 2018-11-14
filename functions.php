<?PHP

// Add the DelayedServerSideRender script
add_action( 'init', function(){
  wp_register_script(
      'DelayedServerSideRender',
      get_template_directory_uri().'/DelayedServerSideRender.js',
      array( 'wp-blocks', 'wp-element' )
  );
} );
