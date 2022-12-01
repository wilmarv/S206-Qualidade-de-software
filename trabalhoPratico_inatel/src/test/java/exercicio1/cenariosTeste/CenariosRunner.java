package exercicio1.cenariosTeste;

import com.intuit.karate.junit5.Karate;

class CenariosRunner {
    
    @Karate.Test
    Karate testCenarios() {
        return Karate.run("cenariosTeste").relativeTo(getClass());
    }    
}
