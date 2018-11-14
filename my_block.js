var el = wp.element.createElement;
var registerBlockType = wp.blocks.registerBlockType;
var TextareaControl = wp.components.TextareaControl; 
var Fragment = wp.element.Fragment;
var BlockControls = wp.editor.BlockControls;
var InspectorControls = wp.editor.InspectorControls;

registerBlockType( 'my/test', {
    title: 'Test',
    icon: 'megaphone',
    category: 'widgets',

    edit: function( props ) {

      var test = props.attributes.test;

      function onChangeTest( newValue ) {
        props.setAttributes( { test: newValue } );
      }

  		return (
        el(
            Fragment,
            null,
            el(
                InspectorControls,
                null,
                el(
                  TextareaControl,
                  {
                    placeholder: 'The test text',
                    label: 'hehe',
                    value: test,
                    onChange: onChangeTest,
                  }
                )
            ),
            el(DelayedServerSideRender, {
      				block: "my/test",
      				attributes:  props.attributes,
              delay: 1000
      			})
        )
  		);
  	},

    save: function() {
        // Rendering in PHP
        return null;
    },
} );
