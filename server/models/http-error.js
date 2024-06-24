class HttpError extends Error {
  // 내장된 에러 이다
  constructor(message, errorCode) {
    // 특별한 constructor 메서드를 생성하고, 클래스를 인스턴스화 하고 이에 대한 신규 객체를 생성할때 실행할수 있는 로직을 작성할 수 있다.
    // message와 errorCode를 인수로 갖는다.
    super(message); // super를 통해 베이스 클래스의 생성자 호출
    this.code = errorCode; // 본 클래스를 기반으로 하는 인스턴스에 code 프로퍼티를 추가하는 작업
  }
}

module.exports = HttpError;
