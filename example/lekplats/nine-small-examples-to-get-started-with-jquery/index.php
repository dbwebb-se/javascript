<?php $title='Nine small examples to get started with jQuery'; include(__DIR__ . '/../mall/header.php'); ?>

<div class='wrapper'>

<h1>Nine small wrapped gifts to get started with jQuery</h1>

<div id='box1' class='box'>
<div class='minimize' title='Miminize this box'>x</div>
<img class='gift' src='/img/gift.png' alt='' />
<h1 class='gift'>1.</h1>
<img class= 'example' src='/image/mikael-roos/me-1.jpg?w=200' alt='' />
<h1 class='example'>1. Selecting items, hide, show and change their look</h1>
<p>Aint it funny to be young. No worries here. I'm smiling :-D and I still have those shoes somewhere in the attic.</p>  
<p>This example is just to get going. You migh wonder how this box opens and closes? Its just a matter of hiding and showing the elements you want to display. The box minimizes itself when you click the x up in the right corner and you can open it up in full width by clicking the number or the wrapped giftbox.</p>
<p>When you click on the text or images in this example it will shift (toggle) between dark and light color.</p>
<p>Its all about using selectors and the eventhandlers.</p>
</div>


<div id='box2' class='box'>
<div class='minimize'>x</div>
<img class='gift' src='/img/gift.png' alt='' />
<h1 class='gift'>2.</h1>
<img class='example' src='/image/mikael-roos/me-2.jpg?w=900' alt='' width='400px' />
<h1 class= 'example'>2. Events and event propagation</h1>
<p>I think I'm around 15 years old here, I guess its the end of "högstadiet". You are supposed to look cool at that stage. Being almost adult (!?), as you can see... Yeah right!</p>
<p>In this example we look at event propagation. When you click anywhere in this box, independently on the cursor style, the box will toggle between pink and white. The same thing happens when you click on the image, and in addition, will the image toggle between larger and smaller size.</p>
<p>Looking in the code will show you an eventhandler for the image, but any click in the image is also a click in the box which has its own eventhandler, the event is propagated up through the chain of eventhandlers. This behaviour can be stopped by using the method <code>stopPropagation()</code>. Create your own example where you stop the event propagation with <code>stopPropagation()</code>.</p>
</div>


<div id='box3' class='box'>
<div class='minimize'>x</div>
<img class='gift' src='/img/gift.png' alt='' />
<h1 class='gift'>3.</h1>
<img class='example' src='/image/mikael-roos/me-3.jpg?w=300' alt='' width='300px' />
<h1 class= 'example'>3. Add and remove elements</h1>
<p>Might I be like nine years old or something. Carrying our dog, a Papillon. having a tweaky looking smile, might depend on allergi which kept me indoor most of the summers. I just did not like the sun. Strange.</p>
<p>Lets create a color palette from this image. Choose each color you think should be in there and add it to the palette, click the color to remove it.</p>
<p><form>
<label>Colorcode in hex (#eee or #5c5c5c): <input id='box3_color' type='text' name='color' /></label>
<input id='box3_add' type='button' value='Add color' /> 
</form></p>
<p id='palette'>Color Palette:</p>
</div>


<div id='box4' class='box'>
<div class='minimize'>x</div>
<img class='gift' src='/img/gift.png' alt='' />
<h1 class='gift'>4.</h1>
<img id='me-image-4' class='example' src='/image/mikael-roos/me-4.jpg?w=400' alt='' width='400px' height='254px' />
<h1 class= 'example'>4. Let's resize me</h1>
<p>It sure looks like I am happy, an icecream in one hand and a photo of christmas times in the other hand. So much happiness in one place, what can one do but smile?</p>
<p>Here are a couple of buttons which will resize the image when you press them. The current image size is also visible.</p>
<p><form>
<input id='box4_dimensions' type='button' value='Get current dimensions wxh' /> <span id='box4_current'></span>
<br/>
<label>Width: </label>
<input id='box4_width_incr' type='button' value='+' />
<input id='box4_width_decr' type='button' value='-' />
<br/>
<label>Height: </label>
<input id='box4_height_incr' type='button' value='+' />
<input id='box4_height_decr' type='button' value='-' />
</form></p>
</div>


<div id='box5' class='box'>
<div class='minimize'>x</div>
<img class='gift' src='/img/gift.png' alt='' />
<h1 class='gift'>5.</h1>
<img id='me-image-51' class='example' class= 'example' src='/image/mikael-roos/me-5.jpg?w=200' alt='' width='200px' />
<img id='me-image-52' class='example' class= 'example' src='/image/mikael-roos/me-5.jpg?w=200' alt='' width='200px' />
<h1 class= 'example'>5. Basic animations</h1>
<p>I was not that found of the summers, but I loved the winters, dark, snow, cold. I just loved them. From what I remember there were a lot of snow when I was child. The memory is a strange thing.</p>
<p>Basic animations can make your page look a bit more lively by dynamically change its look. One ood idea is to make movements a bit smoother. You can <a id='fade-toggle' href=#>toggle the image visibility by fadeing it in or out</a>. You can also <a id='slide-toggle' href=#>slide the image visibility by sliding it in or out</a>.</p>
</div>


<div id='box6' class='box'>
<div class='minimize'>x</div>
<img class='gift' src='/img/gift.png' alt='' />
<h1 class='gift'>6.</h1>
<img class='example lightbox' src='/image/mikael-roos/me-6.jpg' alt='' width='200px' />
<h1 class= 'example'>6. A lightbox for images</h1>
<p>Real fun playing in a small version of a sandbox. No worries, just playing around. It should be like that all the time.</p>
<p>A lightbox is often used to display a larger version of an image without reloading the page. Click the image to try out my lightbox.</p>
</div>


<div id='box7' class='box'>
<div class='minimize'>x</div>
<img class='gift' src='/img/gift.png' alt='' />
<h1 class='gift'>7.</h1>
<h1 class= 'example'>7. A image gallery</h1>
<p>Sometimes you must look back to really see how it was before, we forget so fast. Thats one reason to keep your old images.</p>
<div class='gallery'>
  <div class='gallery-current'><img/></div>
  <div class='gallery-all'>
  <img src1='/image/mikael-roos/me-1.jpg'/>
  <img src1='/image/mikael-roos/me-2.jpg'/>
  <img src1='/image/mikael-roos/me-3.jpg'/>
  <img src1='/image/mikael-roos/me-4.jpg'/>
  <img src1='/image/mikael-roos/me-5.jpg'/>
  <img src1='/image/mikael-roos/me-6.jpg'/>
  <img src1='/image/mikael-roos/me-1.jpg'/>
  <img src1='/image/mikael-roos/me-2.jpg'/>
  <img src1='/image/mikael-roos/me-3.jpg'/>
  <img src1='/image/mikael-roos/me-4.jpg'/>
  <img src1='/image/mikael-roos/me-5.jpg'/>
  <img src1='/image/mikael-roos/me-6.jpg'/>
  <img src1='/image/mikael-roos/me-1.jpg'/>
  <img src1='/image/mikael-roos/me-2.jpg'/>
  <img src1='/image/mikael-roos/me-3.jpg'/>
  <img src1='/image/mikael-roos/me-4.jpg'/>
  <img src1='/image/mikael-roos/me-5.jpg'/>
  <img src1='/image/mikael-roos/me-6.jpg'/>
  <img src1='/image/mikael-roos/me-1.jpg'/>
  <img src1='/image/mikael-roos/me-2.jpg'/>
  <img src1='/image/mikael-roos/me-3.jpg'/>
  <img src1='/image/mikael-roos/me-4.jpg'/>
  <img src1='/image/mikael-roos/me-5.jpg'/>
  <img src1='/image/mikael-roos/me-6.jpg'/>
  </div>
</div> <!-- end of gallery -->
<p>An image gallery may look in many ways but it usually acts as a container for a bunch om images and allows for the user to easily traverse and look at the images.</p>
</div>


<div id='box8' class='box'>
<div class='minimize'>x</div>
<img class='gift' src='/img/gift.png' alt='' />
<h1 class='gift'>8.</h1>
<h1 class= 'example'>A slideshow for your firstpage</h1>
<p>At home, in our kitchen, we have this slideshow with pictures from out childhood, its going over and over again.</p>
<p>A slideshow is commonly used at the first page on many websites to display a set of images and change the image being displayed with a timed interval or by clicking it.</p>
<div class='slideshow'>
  <img src1='/image/mikael-roos/me-1.jpg' crop='0,200,0,300'/> 
  <img src1='/image/mikael-roos/me-2.jpg' crop='0,200,0,0'/>
  <img src1='/image/mikael-roos/me-4.jpg' crop='0,200,0,220'/>
  <img src1='/image/mikael-roos/me-6.jpg' crop='0,200,0,100'/>
</div> <!-- end of slideshow -->
</div>


<div id='box9' class='box'>
<div class='minimize'>x</div>
<img class='gift' src='/img/gift.png' alt='' />
<h1 class='gift'>9.</h1>
<img class='example' src='/image/mikael-roos/me-8.jpg?w=200' alt='' width='200px' />
<h1 class= 'example'>A jquery plugin</h1>
<p>A wrapped present is always nice. Santa seems to be a nice person.</p>
<p>Lets wrap all this exercise together in a jQuery package, wrapped as a jQuery plugin which is a nice way of extending jQuery.</p>
<p>Here I have added two plugins. One that shifts the font each time you click on the text, its called <code>.shiftFont()</code>. Click around and watch it change. The plugin can be configured to use a defined set of fonts to shift between. The other plugin is called <code>.fadeInOut()</code> and will trigger when you click the image.</p>
</div>


</div> <!-- wrapper -->


<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>
