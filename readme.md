# Query Facebook Tool
Notice: Token will expire!! That's terrible!!

###Setup
1. Install [nodejs](http://nodejs.org/)
2. `cd` your directory
3. `npm install`
4. `node index.js --l youraDataLength --token yourToken`

###Example
you can type these cmd at terminal
1. `node index.js --l 40` 會印出 40 筆資料
2. `node index.js --token CAACEdEose0cBADcZCoCrzy0fAUTrLhDsDZAwZBkGi5ZBn5kHAydi32BdnqBbcrca041V3nTkF0Y5IaVkfSKHcejQ3PYrbCGirqxkbvg9gNLcBC3wDsj1fQHAeHRoSZBhF3xp7b4WhVQZC41Vaj1WnRXd3XBE4Om7qjBWioAp3b1GYiUTVJPoctOSMYM8S3wFKKeYRAWvOMnEkCfPyc2ZBc0VR7MeWuziFEZD` FB token 過期可以透過這個來更換


### Standard user usage flow
1. upload csv
2. csv convert json
3. query fb graph api
4. print result file

### FB API
version: `v2.2`
request url: `http://graph.facebook.com/v2.2/`

### Problem
* How to implement "promise" into request sequence?