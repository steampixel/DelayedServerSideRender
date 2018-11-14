<?PHP

// Add the DelayedServerSideRender script
add_action( 'init', function(){
  wp_register_script(
      'DelayedServerSideRender',
      get_template_directory_uri().'/DelayedServerSideRender.js',
      array( 'wp-blocks', 'wp-element' )
  );
} );

// Add example block
add_action( 'init', function() {

    wp_register_script(
      'my_block',
      get_template_directory_uri().'/my_block.js',
      array( 'wp-blocks', 'wp-element', 'DelayedServerSideRender' )
    );

    register_block_type( 'my/block', [
      'attributes' => array(
        'test' => array(
          'type' => 'string',
        )
      ),
      'editor_script' => 'my_block',
      'render_callback' => function($attributes, $content) {
        return '<div>Server side rendered: '.print_r($attributes,true).'</div>';
      }
    ]);

});
