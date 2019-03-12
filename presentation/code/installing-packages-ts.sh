npm install [package]
# the below command may fail and that's fine:
### some packages have built in types (provided by authors rather than by community)
### some packages do not have types - that works, but you won't benefit from type checking
npm install @types/[package]

# or

yarn add [package]
yarn add @types/[package] # may fail