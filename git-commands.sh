#create new repo
#!/bin/bash
echo "# webhooks" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/tspiri26/webhooks.git
git push -u origin main

#add to existing repo
git remote add origin https://github.com/tspiri26/webhooks.git
git branch -M main
git push -u origin main