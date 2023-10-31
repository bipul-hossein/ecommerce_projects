
# [Github Collaborators](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository) `some important code`
This blog shares some important GitHub Collaborators commands. Which will help you in your coding life to work with multiple people on the same project.


### Create a `New Branch`:
```ruby
git checkout -b [name of new branch]
```
Exam: Suppose you create a new branch named `bipulBranch`. So your code will be-
```ruby
git checkout -b bipulBranch
```
### git push a specific branch-
```ruby
git push origin [Branch Name]
```
### Switched to another branch -
```ruby
gut checkout [branch name]
```
### To update code from Github to vs code-
```ruby
git pull
```
#### N.B: In this case, git pull command only pulls from the main branch.
### To pull from a specific branch -
```ruby
git pull origin [Branch Name]
```
### To merge from one Branch to another Branch -
```ruby
git merge [name of the branch you want to merge from]
```
### Written by [Bipul Hossain](https://www.linkedin.com/in/bipul-hossain) & [Jubayer Ahmed](https://github.com/jubayer44).
### Here is some_
#### [How to Use Context Api](https://github.com/bipul-hossein/How-to-use-Context)
#### [Create a Api Server and How To Deploy an Express API on Vercel.](https://github.com/bipul-hossein/frist-api-deploy)
#### [Mongodb-CRUD Example](https://github.com/bipul-hossein/Mongodb-CRUD/blob/main/README.md)

### Generate token using crypto library
run ```node``` command and press enter to go into REPL mode. The you can enter
```require('crypto').randomBytes(64).toString('hex')```
 The error is thrown because the characters after node are interpreted as options passed to command.