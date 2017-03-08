package Utilities;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;


public class LoggingFactory extends SeleniumUtils {

    static final Logger logger = Logger.getLogger(LoggingFactory.class);

    public static Logger getLogger(){
        PropertyConfigurator.configure("log4j.properties");
        return logger ;
    }
}
