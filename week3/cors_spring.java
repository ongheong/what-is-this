// 스프링 서버 전역적으로 CORS 설정
@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
        	.allowedOrigins("http://localhost:8080", "http://localhost:8081") // 허용할 출처
            .allowedMethods("GET", "POST") // 허용할 HTTP method
            .allowCredentials(true) // 쿠키 인증 요청 허용
            .maxAge(3000) // 원하는 시간만큼 pre-flight 리퀘스트를 캐싱
    }
}

//-----------------------------------------------------------------

// 특정 컨트롤러에만 CORS 적용하고 싶을때.
@Controller
@CrossOrigin(origins = "*", methods = RequestMethod.GET) 
public class customController {

	// 특정 메소드에만 CORS 적용 가능
    @GetMapping("/url")  
    @CrossOrigin(origins = "*", methods = RequestMethod.GET) 
    @ResponseBody
    public List<Object> findAll(){
        return service.getAll();
    }
}

//--------------------------------------------------------------

@CrossOrigin(origin="*", allowedHeaders = "*")
@Controller
public class MainController {
	@GetMapping(path = "/")
	public String main(Model model) {
		return "main";
	}
}