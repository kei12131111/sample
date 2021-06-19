package com.example.oauthauthorization.domain.repository;

import java.util.Set;

import com.example.oauthauthorization.domain.model.Client;

public interface AccountRepository {
    Client findClientByClientId(String clientId);

    Set<String> findClientScopesByClientId(String clientId);

    Set<String> findClientResourcesByClientId(String clientId);

    Set<String> findClientGrantsByClientId(String clientId);

    Set<String> findClientRedirectUrisByClientId(String clientId);
}