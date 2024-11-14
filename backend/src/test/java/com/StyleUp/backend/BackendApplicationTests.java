package com.StyleUp.backend;

import com.StyleUp.backend.controllers.AuthControllerTests;
import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.Suite;

@Suite
@SelectClasses({
		AuthControllerTests.class
		// Add additional test classes here
})
class BackendApplicationTests {

}
