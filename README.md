<h2>Motivation</h2>
experiment with cloudinary to upload image and use it in a simple way


<h2>Setup</h2>
<ol>
<li>signup <a href='https://cloudinary.com'>here</a></li>
<li>add the following to the index.html head

```html

 <script
      src="https://upload-widget.cloudinary.com/global/all.js"
      type="text/javascript"
 ></script>    

```

</li>
<li>update the constants in constants.ts according to your cloudinary.com account</li>
<li>images loaded can be referenced in img element by clicking on them on the cloudinary dashboard->Media library , right click on the image and choosing 'copy url'</li>
<li>use the component UploadWidget</li>
</ol>

<h2>Reference</h2>
<a href='https://www.youtube.com/watch?v=paiO6M2wBqE'>Uploading Images & Videos in React with the Cloudinary Upload Widget - Dev Hints</a>

<h2>Open issues</h2>
how to get the url programtically , otherwise share your cloudinary account 