var ServerSideRender = wp.components.ServerSideRender

DelayedServerSideRender.prototype = Object.create(React.Component.prototype);

function DelayedServerSideRender(props) {
  React.Component.constructor.call(this);
  var self = this;

  self.state = {
    attributes: props.attributes
  };

  self.componentWillReceiveProps = function(nextProps) {
    if(self.timeout){
      clearInterval(self.timeout);
    }
    self.timeout = setTimeout(function(){
      self.setState(function(prevState) {
        return { attributes: nextProps.attributes };
      });
    }, props.delay);
  };

  self.componentWillUnmount = function() {
     clearInterval(self.timeout);
  };

  self.render = function() {
    return el(ServerSideRender, {
      block: self.props.block,
      attributes:  self.state.attributes
    });
  }
}
