package com.gsr.janasanth.service.impl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.commons.io.IOUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gsr.janasanth.config.ApplicationProperties;
import com.gsr.janasanth.service.FileService;

@Service
@Transactional
public class FileServiceImpl implements FileService{
	
	private final ApplicationProperties properties;
	public FileServiceImpl(ApplicationProperties properties){
		this.properties = properties;
	}
	

	@Override
	public void saveBytestoDisk(byte[] content, String path, String fileName) throws IOException {
		if(null == content){
			return;
		}
		//System.out.println("inside saveing ..content = " + content);
		File file = new File(properties.getFileRoot() + path + fileName);
		file.getParentFile().mkdirs();
		FileOutputStream fo = new FileOutputStream(file);
		try {
			IOUtils.write(content, fo);
			
		} catch (IOException e) {
			throw e;
		}finally {
			IOUtils.closeQuietly(fo);
		}
		
		//System.out.println("file =======" + file);
		
	}

	@Override
	public byte[] readBytesFromDisk(String path, String fileName) throws FileNotFoundException, IOException {
		
		File file = new File(properties.getFileRoot() + path + fileName);
		if(file.exists()){
			System.out.println("file =======" + file);
			return IOUtils.toByteArray(new FileInputStream(file));


		}
		
		return null;
	}

}
