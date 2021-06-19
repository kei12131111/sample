package com.example.oauthauthorization.domain.service;

import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service("clientDetailsService") // (1)
@Transactional
public class OAuthClientDetailsService implements ClientDetailsService {

}
