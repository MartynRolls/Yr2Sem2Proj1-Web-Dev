export const web_performance_and_maintenance_data = {
    front: `
<h2>Web Performance and Maintenance</h2>
<img src="Images/Web Maintenance.jpg" alt="" style="max-height:60%;max-width:90%;">
    `,

    back: `
<h3>Ways to reduce page loading time</h3>
<ul>
  <li>Compress and optimise images.</li>
  <li>Minify CSS, JavaScript, and HTML.</li>
  <li>Use browser caching.</li>
  <li>Use a Content Delivery Network (CDN).</li>
  <li>Reduce the number of HTTP requests (combine files, remove unused plugins/scripts).</li>
</ul>
 
<h3>Important website maintenance tasks</h3>
<ul>
  <li>Regularly updating software, plugins, and CMS versions.</li>
  <li>Backing up data on a scheduled basis.</li>
  <li>Checking and fixing broken links.</li>
  <li>Monitoring site security (malware scans, SSL renewal).</li>
  <li>Reviewing analytics and performance metrics to inform improvements.</li>
</ul>
<h3>Project 1 Website Loading Times</h3>
<p>Pages that don't rely on external objects (aside from bootstrap) load almost instantly, these pages are the index and research pages. Pages that do need to load/access external APIs tend to take longer. For example, the forms page take some time to fully load because it's waiting on the google form, the javascript page takes some time to load all the externally used pictures, and the WebAPI page needs some time to load the supbase entries. The way I can improve the efficiency of this is by trying to use effecient tools where I can't use site assets. So an improvement that could be made is storing photos on the website for the javascript demos, for example.
    `
}
