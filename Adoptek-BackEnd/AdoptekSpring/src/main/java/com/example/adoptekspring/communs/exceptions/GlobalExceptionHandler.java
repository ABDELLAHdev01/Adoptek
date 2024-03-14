package com.example.adoptekspring.communs.exceptions;

import com.example.adoptekspring.communs.response.ErrorResponseFormat;
import com.example.adoptekspring.communs.response.ErrorResponseSimpleFormat;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.nio.file.NoSuchFileException;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @Autowired
    private ErrorResponseFormat errorResponse;

    @Autowired
    private ErrorResponseSimpleFormat errorSimpleResponse;

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponseFormat> handleValidationException(
            MethodArgumentNotValidException exception, HttpServletRequest request) {



        Map<String, List<String>> errorDetails = exception.getBindingResult()
                .getFieldErrors()
                .stream()
                .collect(Collectors.groupingBy(
                        FieldError::getField,
                        Collectors.mapping(DefaultMessageSourceResolvable::getDefaultMessage, Collectors.toList())
                ));

        errorResponse.setTimestamp(LocalDateTime.now());
        errorResponse.setMessage("Validation Failed");
        errorResponse.setDetails(errorDetails);
        errorResponse.setPath(request.getRequestURI());

        return ResponseEntity.badRequest().body(errorResponse);
    }



    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<ErrorResponseSimpleFormat> handleNoSuchElementException(
            NoSuchElementException exception, HttpServletRequest request) {

        errorSimpleResponse.setTimestamp(LocalDateTime.now());
        errorSimpleResponse.setMessage("Resource Not Found");
        errorSimpleResponse.setDetails(Collections.singletonList(exception.getMessage()));
        errorSimpleResponse.setPath(request.getRequestURI());

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorSimpleResponse);
    }

    @ExceptionHandler(NoSuchFileException.class)
    public ResponseEntity<ErrorResponseSimpleFormat> handleNoSuchFileException(
            NoSuchFileException exception, HttpServletRequest request) {

        errorSimpleResponse.setTimestamp(LocalDateTime.now());
        errorSimpleResponse.setMessage("File Not Found");
        errorSimpleResponse.setDetails(Collections.singletonList(exception.getMessage()));
        errorSimpleResponse.setPath(request.getRequestURI());

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorSimpleResponse);
    }


    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<ErrorResponseSimpleFormat> handleDataIntegrityViolationException(
            DataIntegrityViolationException exception, HttpServletRequest request) {

        errorSimpleResponse.setTimestamp(LocalDateTime.now());
        errorSimpleResponse.setMessage("Data Integrity Violation");
        errorSimpleResponse.setDetails(Arrays.asList(exception.getMessage().split(";")));
        errorSimpleResponse.setPath(request.getRequestURI());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorSimpleResponse);
    }
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ErrorResponseSimpleFormat> handleIllegalArgumentException(
            IllegalArgumentException exception, HttpServletRequest request) {

        errorSimpleResponse.setTimestamp(LocalDateTime.now());
        errorSimpleResponse.setMessage("Illegal Argument Exception");
        errorSimpleResponse.setDetails(Arrays.asList(exception.getMessage().split(";")));
        errorSimpleResponse.setPath(request.getRequestURI());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorSimpleResponse);
    }
}
