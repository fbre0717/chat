const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        textAlign: "center",
        height: "300px",
        color: "#119988", // 글자 색상 설정 (배경 이미지 위에 보여질 텍스트의 색상)
        fontSize: "24px", // 텍스트의 크기 설정
        display: "flex", // 텍스트를 세로 가운데 정렬
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Header입니다.
    </header>
  );
};

export default Header;
