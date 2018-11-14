Have you ever tried to create a server side rendered block that updates its content in Gutenberg 
every time you change attributes using the ServerSideRender component? This becomes very nasty if 
you change text attributes. Because every new character input will cause Gutenberg to query the 
server for a newly rendered version of the block. This behavior also teases the server.

For more details refer to [my blog](https://steampixel.de/en/how-to-prevent-flickering-in-gutenberg-when-editing/)
