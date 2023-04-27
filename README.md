# reproduce-jest-failure
Reproduce jest failure issue with fluentui react-overflow

Steps to reproduce:
1. clone the repo and run `yarn` and `yarn test`
Note that the test will get error:
    TypeError: Cannot redefine property: useIsOverflowItemVisible
        at Function.defineProperty (<anonymous>)
        
2. change the version of fluentui/react-components to 9.11.1 in package.json, and run `yarn` and `yarn test`
Note that the test will pass;

It also happens with other utilities from overflow, such as useOverflowMenu. 
