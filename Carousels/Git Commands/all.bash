# Getting Started with Git
git init
git clone [url]
git config user.name "[name]"
git config user.email "[email]"

# Working with Changes
git status
git add [file]
git add .
git commit -m "[message]"

# Working with Branches
git branch
git branch [branch-name]
git checkout [branch-name]
git merge [branch]

# Syncing with Remote Repository
git remote add origin [url]
git push origin [branch]
git pull
git fetch

# Checking History and Changes
git log
git diff
git diff --staged
git show [commit]

# Undoing Changes
git reset [file]
git reset --hard HEAD
git revert [commit]
git restore [file]

# Working with Tags
git tag
git tag [tag-name]
git tag -a [tag-name] -m "[message]"
git push origin [tag-name]

# Advanced Tips
git stash
git cherry-pick [commit]
git rebase [branch]
git blame [file]

# Cleaning and Maintenance
git clean -n
git clean -f
git gc
git prune

# Help and Settings
git help [command]
git config --list
git config --global alias.[alias-name] [git-command]
git config --global core.editor [editor]