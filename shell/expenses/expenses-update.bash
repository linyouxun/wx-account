curl 'http://127.0.0.1/api/expenses/update' \
  -H 'authority: bosspy-test.xiaojiaoyu100.com' \
  -H 'sec-ch-ua: "Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"' \
  -H 'x-version: 3.6.0-alpha.6' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoie1wiYWNjb3VudFwiOlwibGlueW91eHVuMVwiLFwiY29udGFjdE51bWJlclwiOlwiOTAwMDAwMTE1NTdcIixcImNyZWF0ZVRpbWVcIjoxNTg0MDc5MjQ0MDg4LFwiY3JlYXRlVXNlclwiOlwiMTEyMjMzXCIsXCJlbXBsb3llZU5vXCI6XCJYNTg4NjNcIixcImVuYWJsZUZsYWdcIjpcIlZBTElEXCIsXCJocm1zU3RhdGlvbklkXCI6XCJcIixcImlzRGVsZXRlXCI6XCJOT1wiLFwibmFtZVwiOlwi5p6X5pyJ5YuLMVwiLFwibm9cIjpcIjM4MDY0MjkzNjkwMzI4MDUxNVwiLFwib3JnTm9cIjpcIk9SRzAwMDAwMDEwMzZcIixcInNleFwiOlwiTUFMRVwiLFwidXBkYXRlVGltZVwiOjE2MjM5ODM2ODU4MjQsXCJ1cGRhdGVVc2VyXCI6XCIxMTIyMzNcIn0iLCJpZCI6IjM4MDY0MjkzNjkwMzI4MDUxNSIsImV4cCI6MTYzMTUyODM0NH0.NZ2TibFiLZQjJCvKkwXm8jmGAo4S-Di7JM30zEfUGeg' \
  -H 'content-type: application/json;charset=UTF-8' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36' \
  -H 'x-source: BOSS' \
  -H 'sec-ch-ua-platform: "Windows"' \
  -H 'origin: https://bosspy-test.xiaojiaoyu100.com' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: https://bosspy-test.xiaojiaoyu100.com/console/student-management/list' \
  -H 'accept-language: zh-CN,zh;q=0.9,en;q=0.8' \
  -H 'cookie: gr_user_id=2f15527c-7623-4c88-b0e4-6ad85a8437a5; grwng_uid=f645a3cf-361a-417d-8c58-23fa4512a08e; 80cc4affb69c1130_gr_last_sent_cs1=X55427; bd183afb0d5cb45c_gr_last_sent_cs1=X55427; 80cc4affb69c1130_gr_cs1=X55427; aace305c8b58ec2e_gr_last_sent_cs1=linyouxun1; aace305c8b58ec2e_gr_session_id=d3fe9e0c-a8d6-42a5-ad05-b858ebff588c; aace305c8b58ec2e_gr_last_sent_sid_with_cs1=d3fe9e0c-a8d6-42a5-ad05-b858ebff588c; aace305c8b58ec2e_gr_session_id_d3fe9e0c-a8d6-42a5-ad05-b858ebff588c=true; sessionac-test=MTYzMTQ0MTk0M3xEdi1CQkFFQ180SUFBUkFCRUFBQVFQLUNBQUVHYzNSeWFXNW5EQkFBRG5WelpYSkpSQzFVWlhOMGFXNW5Cbk4wY21sdVp3d2FBQmcxWlRaaU1qSXhZakk1WXpaallqQXdNREZtTmpOaFpEUT18BQy1_8Q01YcOdoShSv72l6r8wr8in7IK6y024rWHGME=; session_ac_ex_test=0; aace305c8b58ec2e_gr_cs1=linyouxun1' \
  --data-raw '{"id":"2","accountId":"2","type":"??????","useTime":"2021-08-01 12:22","remark":"","money":2300}' \
  --compressed