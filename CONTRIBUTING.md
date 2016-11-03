# Welcome to the contributing guidelines
This is a work in progress. If you feel yourself confronted with a situation not documented here - feel free to commit a pr!

## Notes on writing good commit messages
##### Commit Messages
* The first line of your commit message should be a short (max 80 chars) public description of what you have achieved with the commit. This is important because it's what appears in the change log.
* Leave a blank line after the first line.
* The 3rd line should reference the issue with `issue #` if you just want to mention an issue or `closes #` if your commit closes an issue. If you don't have an issue to reference or close, think carefully about whether you need to raise one, before opening a PR.
* Use bullet points on the following lines to explain what your changes achieve and in particular why you've used your approach.

E.g.

```
create guidelines for pull requests

closes #UWP-51
- added some written down guidelines
- added a template to be shown on issue creation
```

## Submitting Pull Requests
**Always work on a branch**. It will make your life much easier, really. Not touching the develop branch will also simplify keeping your branch up-to-date.

#### Clean-up history
Whilst you're working on your branch on your own, you can do all the commits you like - lots of little commits are highly recommended.
However, when you want a PR to be merged, you should clean your history ready for public consumption.

- Run  `git log --oneline master..your-branch-name | wc -l`  to see how many commits there are on your branch.
- Run `git rebase -i HEAD~#` where # is the number of commits you have done on your branch.

Use the interactive rebase to edit your history.
Unless you have good reason to keep more than one commit, it is best to mark the first commit with 'r' (reword) and the others with 's' (squash).
This lets you keep the first commit only, but change the message.

#### Check if it passes the tests
Run `npm run test` to check that your work passes eslint linting and the tests.
If this fails, your PR will throw an error when submitted.

#### Submit!
Now that your history is nice and clean, fetch the latest updates from upstream. Assuming you haven't changed the develop branch, do:

    > git checkout develop
    > git pull origin develop

Then rebase your branch/changes on top of `develop`:

    > git checkout my-branch-name
    > git rebase develop

And finally push your work to your fork:

    > git push -u origin my-branch-name
