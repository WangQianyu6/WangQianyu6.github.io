var posts=["posts/4a17b156.html","posts/fbff4d2a.html","posts/c0aea12a.html","posts/33426548.html","posts/c7be28a4.html","posts/fbfb7b1c.html","posts/5149739a.html","posts/8e58660f.html","posts/ce1d8c1b.html","posts/eb33bc3c.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};