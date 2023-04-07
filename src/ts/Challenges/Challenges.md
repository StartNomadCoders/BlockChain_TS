### 노마더 코더 Challenges 모음집

#### Assignment_3.ts Quiz
##### Challenge goals:
- 현재까지 배운 것을 토대로, 아래 함수들에 대한 구현과 함께 호출 시그니처(call signatures) 를 작성해주세요
- last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
- prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다. 
- mix(arr,arr) : 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
- count(arr) : 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
- findIndex(arr, item) : 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후 존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
- slice(arr, startIndex, endIndex): 첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다. 첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다. 이때 세번째 매개변수는 필수 매개변수가 아닙니다.

***
#### Classes!
##### Challenge goals:
타입스크립트의 클래스를 이용하여 Dict (딕셔너리. dictionary) 클래스를 만드세요. Dict 클래스는 아래와 같은 메소드들을 갖고 있어야 합니다.

- add: 단어를 추가함.
- get: 단어의 정의를 리턴함.
- delete: 단어를 삭제함.
- update: 단어를 업데이트 함.
- showAll: 사전 단어를 모두 보여줌.
- count: 사전 단어들의 총 갯수를 리턴함.
- upsert 단어를 업데이트 함. 존재하지 않을시. 이를 추가함. (update + insert = upsert)
- exists: 해당 단어가 사전에 존재하는지 여부를 알려줌.
- bulkAdd: 다음과 같은 방식으로. 여러개의 단어를 한번에 추가할 수 있게 해줌. [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]
- bulkDelete: 다음과 같은 방식으로. 여러개의 단어를 한번에 삭제할 수 있게 해줌. ["김치", "아파트"]

<br>
<br>
<br>

[TypeScript: 작성하는곳](https://www.typescriptlang.org/)

[URL 단축](https://huchu.link/ )