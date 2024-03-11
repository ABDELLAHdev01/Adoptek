package com.example.adoptekspring.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(org.springframework.web.servlet.config.annotation.CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:4200") // Angular app's URL
                .allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }

}
