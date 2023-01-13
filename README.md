# classting-front-assignment
- 간단한 '퀴즈' 웹앱

## 시연할 수 있는 주소 

## 사용한 언어 
- typescript
## 사용한 라이브러리 
- mui
- axios
- framer-motion 
- react-router-dom
- react-error-boundary
- react-scripts
- recharts
- recoil
## 실행하는 방법 

1. npm i 
2. npm start

### 테스트 
테스트를 진행하기에 앞서 컴포넌트를 모두 MUI로 구성하였기 때문에, 컴포넌드 단위의 테스트는 필요하지 않다고 판단하였습니다. 

따라서 페이지 단위의 테스트만 필요하다고 생각하게 되었습니다. 

그러나, 페이지 단위의 테스트를 정확하게 하기 위해선 정해진 API 결과를 받아야 하고 그렇기 때문에 msw를 사용해야 한다는 것을 테스트 코드를 짜면서 알게되었습니다. 

뿐만 아니라, 테스트 코드에 적합한 코드가 있다고 생각이 되어서 처음부터 테스트 코드를 위한 코드를 짜야한다는 것을 알게 되었습니다. 

만약 시간이 더 충분히 주어진다면 msw를 통해 mock data를 사용하여 정확한 비즈니스 로직 테스트를 할 수 있을 것 같습니다. 

### 구현한 기능 
- 사용자는 원하는 형태의 퀴즈 카테코리를 선택할 수 있습니다. 
- 사용자는 '퀴즈 풀기' 버튼을 클릭하여 퀴즈를 풀 수 있습니다. 
- 사용자는 문항에 대한 답안을 보기 중 선택할 수 있습니다. 
  - 사용자는 답안 선택 후 다음 문항 버튼을 볼 수 있습니다. 
  - 사용자는 답안이 맞았는지 틀렸는지 바로 알 수 있습니다. 
  - 다음 문항 버튼을 클릭하면 다음 문항으로 이동할 수 있습니다.
- 퀴즈를 마치켠 다음과 같은 결과 정보를 얻을 수 있습니다. 
  - 퀴즈를 마칠 때까지 소요된 시간 
  - 정답 개수 
  - 오답 수 
  - 정 오답에 대한 비율을 차트로 표기 
- 오답 노트 기능 