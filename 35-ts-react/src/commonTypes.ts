//여러 파일에서 공통적으로 사용하는 타입 관리
export interface TodoItemType {
  id: number;
  text: string;
  completed: boolean;
}

export interface FakePostsTypes {
  id: number;
  title: string;
  body: string;
}
