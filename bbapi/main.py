import requests


cookies = {
}

headers = {
}

# response = requests.get('https://kaml.ddns.net/ultra/course', headers=headers, cookies=cookies)

from rich import print

 #lms.kau.edu.sa"

def getLm(start, Cid):

    # getting course number
    # CourseNumebr = [x['courseId'] for x in requests.get(f'https://{start}/learn/api/v1/courses/', headers=headers, cookies=cookies).json()['results'] if x['id'] == Cid][0]
    
    # print(CourseNumebr)
    response = requests.get(f'https://{start}/learn/api/v1/courses/{Cid}/contents', headers=headers, cookies=cookies)

    LeearingMaterialId = [x['id'] for x in response.json()["results"] if x['title'] == "Learning_Materials"][0]

    # response = requests.get(f'https://kaml.ddns.net/learn/api/v1/courses/{Cid}/contents/{LeearingMaterialId}/attachments', headers=headers, cookies=cookies)

    # contentId = response.json()['results'][0]['id']

    response = requests.get(f'https://{start}/learn/api/v1/courses/{Cid}/resources', headers=headers, cookies=cookies)
    response = response.json()

    downloadUrls = [x['downloadUrl'] for x in response["courseResources"] if x['courseId'] == Cid and x['mimeType'] != 'application/octet-stream']
    locations = [f"https://{start}/bbcswebdav{x['location']}" for x in response["courseResources"] if x['courseId'] == Cid and x['mimeType'] != 'application/octet-stream']
   
    print(downloadUrls)
    print(locations)
    # return (response.json())

#NB. Original query string below. It seems impossible to parse and
#reproduce query strings 100% accurately so the one below is given
#in case the reproduced version is not "correct".
# response = requests.get('https://lms.kau.edu.sa/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_101_1', headers=headers, cookies=cookies)


# print(response.json())

getLm("kaml.ddns.net", "_6_1")
# print(requests.get(f'https://{start}/learn/api/v1/courses/', headers=headers, cookies=cookies).json())
# https://kaml.ddns.net/bbcswebdav/courses/203/Notes_240307_145602%20%281%29.pdf
# https://kaml.ddns.net/bbcswebdav/courses/203//courses/203/%D9%86%D9%85%D9%88%D8%B0%D8%AC_%D8%AA%D8%B3%D9%84%D9%8A%D9%85_%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9_%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%D8%A9_%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1_%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A



# https://kaml.ddns.net/bbcswebdav/courses/203/Notes_240307_145602
# https://kaml.ddns.net/bbcswebdav/courses/203/Notes_240307_145602%20%281%29.pdf


