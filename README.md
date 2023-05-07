<h2>Motivation</h2>
experiment with cloudinary to upload image , get its url and use it in a simple way

<h2>Setup</h2>
<ol>
<li>signup <a href='https://cloudinary.com'>here</a></li>
<li>add the following to the index.html head

```html
<script
  src="https://widget.cloudinary.com/v2.0/global/all.js"
  type="text/javascript"
></script>
```

</li>
<li>update the constants in .env according to your cloudinary.com account</li>
<li>use the component UploadWidget</li>
</ol>

<h2>Reference</h2>
The basic idea is described <a href='https://www.youtube.com/watch?v=paiO6M2wBqE'>in this vide</a> beside getting url. Full example with the url is from <a href='https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/react-upload-widget-preset'>here</a>
